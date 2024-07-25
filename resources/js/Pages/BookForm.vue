<template>
    <Head>
        <title>Book Management - Book</title>
        <meta name="description" content="Your page description">
    </Head>

    <div class="container">
        <h1 class="form-title">{{ book ? 'Edit Book' : 'Add New Book' }}</h1>
        <form @submit.prevent="submit" class="book-form">
            <div class="form-group">
                <label for="title">Title:</label>
                <input v-model="form.title" type="text" id="title" />
                <span v-if="errors.title" class="error">{{ errors.title }}</span>
            </div>

            <div class="form-group">
                <label for="author">Author:</label>
                <input v-model="form.author" type="text" id="author" />
                <span v-if="errors.author" class="error">{{ errors.author }}</span>
            </div>

            <div class="form-group">
                <label for="published_year">Published Year:</label>
                <input v-model="form.published_year" type="text" id="published_year" />
                <span v-if="errors.published_year" class="error">{{ errors.published_year }}</span>
            </div>

            <div class="form-group">
                <label for="genre">Genre:</label>
                <input v-model="form.genre" type="text" id="genre" />
                <span v-if="errors.genre" class="error">{{ errors.genre }}</span>
            </div>

            <button type="submit" class="submit-button">
                {{ book ? 'Update Book' : 'Add Book' }}
            </button>
        </form>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { Head } from '@inertiajs/vue3';
import { useToast } from 'vue-toastification';

const props = defineProps(['book']);
const form = ref(props.book || {
    title: '',
    author: '',
    published_year: '',
    genre: '',
});

const errors = ref({});
const toast = useToast();

const validateForm = () => {
    errors.value = {};

    if (!form.value.title) {
        errors.value.title = 'Title is required.';
    }
    if (!form.value.author) {
        errors.value.author = 'Author is required.';
    }
    if (!form.value.published_year || !/^\d{4}$/.test(form.value.published_year)) {
        errors.value.published_year = 'Published year is required and must be a valid year.';
    }
    if (!form.value.genre) {
        errors.value.genre = 'Genre is required.';
    }

    return Object.keys(errors.value).length === 0;
};

const submit = () => {
    if (validateForm()) {
        try {
            if (props.book) {
                Inertia.put(`/books/${props.book.id}`, form.value);

                toast.success('Book successfully updated');
            } else {
                Inertia.post('/books', form.value);

                // Reset the form fields
                form.value = {
                    title: '',
                    author: '',
                    published_year: '',
                    genre: '',
                };
                toast.success('Book successfully added');
            }
        } catch (error) {
            console.error('Submission error:', error);
            toast.error('There was an error processing your request.');
        }
    }
};
</script>

<style scoped>
.error {
    color: red;
    font-size: 0.875rem;
    margin-top: 5px;
}
.container {
    padding: 20px;
    max-width: 600px;
    margin: auto;
}

.form-title {
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
}

.book-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

label {
    font-weight: bold;
}

input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
}

input:focus {
    border-color: #007bff;
    outline: none;
}

.submit-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
}

.submit-button:hover {
    background-color: #0056b3;
}
</style>
