<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Redis;
use Tests\TestCase;

class RedisConnectionTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function testRedisConnectionPing()
    {
        $input = 'baz';
        Cache::put('bar', $input, 600); // 10 Minutes
        $output = Cache::get('bar', 'default');
        $this->assertEquals($input, $output);
    }
}
