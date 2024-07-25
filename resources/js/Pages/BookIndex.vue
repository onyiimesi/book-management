<template>
    <Head>
        <title>Book Management - Books</title>
        <meta name="description" content="Your page description">
    </Head>

    <div class="container">
        <h1 class="title">Books</h1>
        <Link class="add-book-button" href="/books/create">Add New Book</Link>
        <table class="book-table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Published Year</th>
                    <th>Genre</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="book in books" :key="book.id">
                    <td>{{ book.title }}</td>
                    <td>{{ book.author }}</td>
                    <td>{{ book.published_year }}</td>
                    <td>{{ book.genre }}</td>
                    <td class="actions">
                        <Link class="edit-button" :href="`/books/${book.id}/edit`">Edit</Link>
                        <button class="delete-button" @click="destroy(book.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/vue3';
import { useToast } from 'vue-toastification';
import { ref } from 'vue';

const props = defineProps(['books']);
const books = ref(props.books);

const toast = useToast();

const destroy = (id) => {
    if (confirm('Are you sure you want to delete this book?')) {
        Inertia.delete(`/books/${id}`);

        toast.success('Book successfully deleted');
        books.value = books.value.filter(book => book.id !== id);
    }
};
</script>

<style scoped>
.container {
    padding: 20px;
    max-width: 1200px;
    margin: auto;
}

.title {
    font-size: 2rem;
    margin-bottom: 20px;
}

.add-book-button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    background-color: #007bff;
    text-decoration: none;
    border-radius: 5px;
    margin-bottom: 20px;
}

.add-book-button:hover {
    background-color: #0056b3;
}

.book-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
}

.book-table th,
.book-table td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
}

.book-table th {
    background-color: #f4f4f4;
}

.book-table tr:nth-child(even) {
    background-color: #f9f9f9;
}

.actions {
    display: flex;
    gap: 10px;
}

.edit-button {
    color: #007bff;
    text-decoration: none;
    padding: 5px 10px;
    border: 1px solid #007bff;
    border-radius: 5px;
}

.edit-button:hover {
    background-color: #007bff;
    color: #fff;
}

.delete-button {
    background-color: #dc3545;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
}

.delete-button:hover {
    background-color: #c82333;
}
</style>
