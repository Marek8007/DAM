<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\Deaths;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class deathsController extends AbstractController
{

    /**
     * @Route("/deaths")
     */
    public function index(): Response
    {
        $deaths = $this->getDoctrine()
            ->getRepository(Deaths::class)
            ->findAll();

        dump($deaths); die;
    }
}
