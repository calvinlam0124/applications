<?php declare(strict_types=1);

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;

class JwtTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testSecretExistTest(): void
    {
        $file = parse_ini_file('.env', true, INI_SCANNER_RAW);
        $this->assertNotNull($file['APP_KEY']);
    }
}
