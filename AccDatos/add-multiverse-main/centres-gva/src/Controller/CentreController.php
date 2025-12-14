<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\Centre;
use App\Entity\Cicle;
use App\Entity\Regim;
use App\Entity\Provincia;
use Dom\Entity;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerAwareInterface;
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
        ['groups' =>['centre', 'provincia', 'regim', 'cicle']]);


        return new Response($centres);
    }

    public function centre(Request $request, SerializerInterface $serializer): Response
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

        $centre = $serializer->serialize(
            $centre,
            "json",
            ['groups' =>['centre', 'provincia', 'regim', 'cicle']]
        );

        return new Response($centre);
    }

    public function newCentre(SerializerInterface $serializer): Response
    {
        $centre = new Centre();
        $centre->setCodi('12345678');
        $centre->setCentre('Centre Nou');
        $centre->setDireccio('Carrer Nou, 1');
        $centre->setLocalitat('Localitat Nova');
        $centre->setTelefon('123456789');

        $provincia = $this->getDoctrine()
            ->getRepository(Provincia::class)
            ->findOneBy(['id' => 1]);
        $centre->setProvincia($provincia);

        $regim = $this->getDoctrine()
            ->getRepository(Regim::class)
            ->findOneBy(['id' => 1]);
        $centre->setRegim($regim);

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($centre);
        $entityManager->flush();

        $centre = $serializer->serialize(
            $centre,
            'json',
        ['groups' =>'centre']);

        return new Response($centre);
    }


    public function updateCentre(Request $request, SerializerInterface $serializer): Response
    {
        $id = $request->get("id");

        $centre = $this->getDoctrine()
            ->getRepository(Centre::class)
            ->findOneBy(['id' => $id]);

        if (!empty($centre)) {
            $centre->setDireccio('Carrer Nou, 1241231');

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($centre);
            $entityManager->flush();

            $centre = $serializer->serialize(
                $centre,
                'json',
                ['groups' =>['centre', 'provincia', 'regim']]
            );

            return new Response($centre);
        }

        return new Response('Centre not found', Response::HTTP_NOT_FOUND);

    }

    public function deleteCentre(Request $request, SerializerInterface $serializer): Response
    {
        $id = $request->get("id");

        $centre = $this->getDoctrine()
            ->getRepository(Centre::class)
            ->findOneBy(['id' => $id]);

        if (!empty($centre)) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($centre);
            $entityManager->flush();

            return new Response('Centre deleted successfully', Response::HTTP_NO_CONTENT);
        }
        return new Response('Centre not found', Response::HTTP_NOT_FOUND);
    }

    public function addCicleCentre(Request $request, SerializerInterface $serializer): Response
    {
        $centreId = $request->get("centre_id");
        $cicleId = $request->get("cicle_id");

        $centre = $this->getDoctrine()
            ->getRepository(Centre::class)
            ->findOneBy(['id' => $centreId]);

        $cicle = $this->getDoctrine()
            ->getRepository(Cicle::class)
            ->findOneBy(['id' => $cicleId]);

        if (!empty($centre) && !empty($cicle)) {
            $centre->addCicle($cicle);

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($centre);
            $entityManager->flush();

            $centre = $serializer->serialize(
                $centre,
                "json",
                ['groups' =>['centre', 'provincia', 'regim','cicle']]
            );

            return new Response($centre);
        }
    }
}