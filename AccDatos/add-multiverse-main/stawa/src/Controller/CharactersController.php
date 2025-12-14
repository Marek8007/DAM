<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\Characters;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CharactersController extends AbstractController
{

    /**
     * @Route("/characters")
     */
    public function index(): Response
    {
        $characters = $this->getDoctrine()
            ->getRepository(Characters::class)
            ->findAll();

        dump($characters); die;
    }
}
