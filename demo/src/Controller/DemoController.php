<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DemoController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function home(): Response
    {
        return $this->render('demo/home.html.twig');
    }

    /**
     * @Route("/components", name="components")
     */
    public function components(): Response
    {
        return $this->render('demo/components.html.twig');
    }
}
