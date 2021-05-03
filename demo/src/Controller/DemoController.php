<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DemoController extends AbstractController
{
    /**
     * @Route("/", name="dashboard")
     */
    public function dashboard(): Response
    {
        return $this->render('demo/dashboard.html.twig');
    }

    /**
     * @Route("/components", name="components")
     */
    public function components(): Response
    {
        return $this->render('demo/components.html.twig');
    }
}
