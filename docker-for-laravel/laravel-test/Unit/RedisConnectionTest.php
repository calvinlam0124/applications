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
        $assert_response = "PONG";
        $response = Redis::connection()->ping()->__toString();
        $this->assertEquals($response, $assert_response);
    }
}
