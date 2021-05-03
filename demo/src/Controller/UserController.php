<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/users", defaults={"_menu_root"="user"})
 */
class UserController extends AbstractController
{
    private UserRepository $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * @Route("/", name="user_list")
     * @Route("/page-{page}", name="user_list_page", defaults={"page"=1})
     */
    public function list(int $page = 1, int $perPage = 10): Response
    {
        $users = $this->userRepository->findAll();

        return $this->render('user/list.html.twig', [
            'users' => \array_slice($users, $perPage * ($page - 1), $perPage),
            'page' => $page,
            'minPage' => 1,
            'maxPage' => ceil(\count($users) / $perPage),
        ]);
    }

    /**
     * @Route("/{id}", name="user_show")
     */
    public function show(int $id): Response
    {
        return $this->render('user/show.html.twig', [
            'user' => $this->userRepository->findOneById($id)
        ]);
    }
}
