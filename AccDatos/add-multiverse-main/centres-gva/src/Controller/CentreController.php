<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\Centre;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class CentreController extends AbstractController
{
    public function centres(SerializerInterface $serializer): Response
    {
        $centres = $this->getDoctrine()
        ->getRepository(Centre::class)
        ->findAll();

        $centres = $serializer->serialize(
            $centres,
            'json',
        ['groups' =>'centre']);


        return new Response($centres);
    }

    public function centre(Request $request): Response
    {
    $id = $request->get("id");


        $centre = $this->getDoctrine()
            ->getRepository(Centre::class)
            ->findOneBy(['id' => $id]);

        dump($centre->getCentre(), $centre->getCodi());
        dump($centre->getprovincia()->getNom(), $centre->getRegim()->getNom());
        foreach ($centre->getCicle() as $cicle) {
            dump($cicle->getNom(), $cicle->getCodi());
        }

        die;


        return new Response();
    }
}