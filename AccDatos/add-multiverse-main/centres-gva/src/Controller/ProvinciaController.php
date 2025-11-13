<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\Cicle;
use App\Entity\Provincia;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class ProvinciaController extends AbstractController
{

    public function provincias(SerializerInterface $serializer): Response
    {
        $provincias = $this->getDoctrine()
            ->getRepository(Provincia::class)
            ->findAll();

        $provinias = $serializer->serialize(
            $provincias,
            'json',
            ['groups' => 'provincia_nom']);

        return new Response($provinias);

    }
}
