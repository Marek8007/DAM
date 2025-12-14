<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\Films;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class filmsController extends AbstractController
{

    /**
     * @Route("/films")
     */
    public function index(): Response
    {
        $films = $this->getDoctrine()
            ->getRepository(Films::class)
            ->findAll();

        dump($films); die;
    }
}
