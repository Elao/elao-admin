<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DemoController extends AbstractController
{
    private UserRepository $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * @Route("/", name="dashboard", defaults={"_menu_root"="home"})
     */
    public function dashboard(): Response
    {
        $users = $this->userRepository->findAll();

        return $this->render('demo/dashboard.html.twig', [
            'user_count' => count($users),
            'user_enabled_count' => count(array_filter($users, fn ($user) => $user->isEnabled())),
        ]);
    }

    /**
     * @Route("/components", name="components")
     */
    public function components(): Response
    {
        return $this->render('demo/components.html.twig');
    }
}
