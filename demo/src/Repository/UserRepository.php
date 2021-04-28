<?php

namespace App\Repository;

use App\Model\User;
use Faker;

class UserRepository
{
    private Faker\Generator $faker;
    private array $users = [];

    public function __construct(int $length = 100, $lang = 'fr_FR', $seed = 1)
    {
        $this->faker = Faker\Factory::create($lang);

        $this->faker->seed($seed);

        for ($id = 1; $id <= $length; $id++) {
            $this->users[$id] = new User($id, $this->faker->name, $this->faker->email);
        }
    }

    public function findAll(): array
    {
        return array_values($this->users);
    }

    public function findOneById(int $id): ?User
    {
        return isset($this->users[$id]) ? $this->users[$id] : null;
    }
}
