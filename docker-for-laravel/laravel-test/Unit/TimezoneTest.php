<?php

namespace Tests\Unit;

use Carbon\Carbon;
use Tests\TestCase;

class TimezoneTest extends TestCase
{
    public function testApplicationTimezone()
    {
        // Because the created_at and updated_at are convent the following timezone
        // And directly insert to db, no matter what timezone in DB setting, DB OS, App OS setting
        // So make sure the timezone always UTC
        $expectedIsUTC = 'UTC';
        $this->assertEquals(config('app.timezone'), $expectedIsUTC); // Hongkong, Asia/Hong_Kong
        $this->assertEquals(date('e'), $expectedIsUTC); // date_default_timezone_set("Hongkong");
        $this->assertEquals(Carbon::now()->format('e'), $expectedIsUTC); // date_default_timezone_set("Hongkong");
        $this->assertEquals(ini_get('date.timezone'), $expectedIsUTC); // date_default_timezone_set("Hongkong");
    }
}
