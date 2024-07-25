<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class BookTest extends TestCase
{
    use RefreshDatabase;

    public function test_book_creation()
    {
        $response = $this->post('/books', [
            'title' => 'Test Book',
            'author' => 'Test Author',
            'published_year' => '2024',
            'genre' => 'Test Genre',
        ]);

        $response->assertRedirect('/books');
        $this->assertDatabaseHas('books', ['title' => 'Test Book']);
    }
}
