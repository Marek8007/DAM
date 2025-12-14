<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\Affiliations;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class affiliationsController extends AbstractController
{

    /**
     * @Route("/affiliations")
     */
    public function index(): Response
    {
        $affiliations = $this->getDoctrine()
            ->getRepository(Affiliations::class)
            ->findAll();

        dump($affiliations); die;
    }
}
