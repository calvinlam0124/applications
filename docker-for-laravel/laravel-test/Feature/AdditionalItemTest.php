<?php

namespace Tests\Unit;

use App\AdditionalItem;
use App\Inventory;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Artisan;
use Tests\TestCase;

class InventoryTest extends TestCase
{
    use RefreshDatabase;

    public function testIndex()
    {
        Artisan::call('db:seed');
        $response = $this->actingAs(User::all()->first())->get(route('additional_items'));
        $response->assertStatus(200);
    }

    public function testCreate()
    {
        Artisan::call('db:seed');
        $response = $this->actingAs(User::all()->first())->get(route('additional-item/create'));
        $response->assertStatus(200);
    }

    public function testStore()
    {
        Artisan::call('db:seed');
        $response = $this->actingAs(User::all()->first())->post(route('additional-item/store'));
        $response->assertStatus(302);
    }

    public function testView()
    {
        Artisan::call('db:seed');
        $inventory = factory(AdditionalItem::class)->create();
        $url = route('additional_items', $inventory->id, false);
        $response = $this->actingAs(User::all()->first())->get($url);
        $response->assertStatus(200);
    }

    public function testEdit()
    {
        Artisan::call('db:seed');
        $inventory = factory(AdditionalItem::class)->create();
        $url = route('additional-item/edit', $inventory->id, false);
        $response = $this->actingAs(User::all()->first())->get($url);
        $response->assertStatus(200);
    }

    public function testUpdate()
    {
        Artisan::call('db:seed');
        $inventory = factory(AdditionalItem::class)->create();
        $url = route('additional-item/update', $inventory->id, false);
        $response = $this->actingAs(User::all()->first())->put($url);
        $response->assertStatus(302);
        $response = $this->actingAs(User::all()->first())->patch($url);
        $response->assertStatus(302);
    }

    public function testDestroy()
    {
        Artisan::call('db:seed');
        $response = $this->actingAs(User::all()->first())->delete(route('additional-item/delete'));
        $response->assertStatus(302);
    }

}
