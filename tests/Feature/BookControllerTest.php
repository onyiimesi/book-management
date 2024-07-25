<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class BookControllerTest extends TestCase
{
    use RefreshDatabase;
    
    public function test_index()
    {
        $response = $this->get('/books');
        $response->assertStatus(200);
    }
}
