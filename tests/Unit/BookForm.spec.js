import { mount } from '@vue/test-utils';
import BookForm from '@/Pages/BookForm.vue';

describe('BookForm.vue', () => {
  it('renders form for adding a book', () => {
    const wrapper = mount(BookForm);
    expect(wrapper.text()).toContain('Add New Book');
  });
});
