<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\Cicle;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class CicleController extends AbstractController
{

    public function cicles(SerializerInterface $serializer): Response
    {

        $cicles = $this->getDoctrine()
            ->getRepository(Cicle::class)
            ->findAll();


        $cicles = $serializer->serialize(
            $cicles,
            'json',
        ["groups"=>['cicle']]);


        return new Response($cicles);
    }

    public function cicle(Request $request, SerializerInterface $serializer): Response
    {
        $id = $request->get("id");

        $cicle = $this->getDoctrine()
            ->getRepository(Cicle::class)
            ->findOneBy(['id' => $id]);






        $cicle = $serializer->serialize(
            $cicle,
            'json',
            ["groups"=>['cicle', 'centre']]);


        return new Response($cicle);
    }
}
