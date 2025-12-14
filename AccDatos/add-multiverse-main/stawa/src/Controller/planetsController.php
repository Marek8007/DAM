<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\Planets;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class planetsController extends AbstractController
{

    /**
     * @Route("/planets")
     */
    public function index(): Response
    {
        $planets = $this->getDoctrine()
            ->getRepository(Planets::class)
            ->findAll();

        dump($planets); die;
    }
}
