<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    private UserRepository $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * @Route("/users", name="user_list")
     */
    public function list(): Response
    {
        return $this->render('user/list.html.twig', [
            'users' => $this->userRepository->findAll()
        ]);
    }

    /**
     * @Route("/users/{id}", name="user_show")
     */
    public function show(int $id): Response
    {
        return $this->render('user/show.html.twig', [
            'user' => $this->userRepository->findOneById($id)
        ]);
    }
}
