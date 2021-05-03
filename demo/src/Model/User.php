<?php

namespace App\Model;

class User
{
    private int $id;
    private string $name;
    private string $email;
    private \DateTimeInterface $premiumUntil;
    private bool $enabled;
    private string $role;

    public function __construct(
        int $id,
        string $name,
        string $email,
        \DateTimeInterface $premiumUntil,
        bool $enabled = false,
        string $role = 'ROLE_USER'
    ) {
        $this->id = $id;
        $this->name = $name;
        $this->email = $email;
        $this->premiumUntil = $premiumUntil;
        $this->enabled = $enabled;
        $this->role = $role;
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function getPremiumUntil(): \DateTimeInterface
    {
        return $this->premiumUntil;
    }

    public function isEnabled(): bool
    {
        return $this->enabled;
    }

    public function getRole(): string
    {
        return $this->role;
    }
}
