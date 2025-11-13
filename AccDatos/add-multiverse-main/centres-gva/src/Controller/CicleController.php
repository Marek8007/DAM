<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\Cicle;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CicleController extends AbstractController
{

    public function cicles()
    {

        $cicles = $this->getDoctrine()
            ->getRepository(Cicle::class)
            ->findAll();

        dump($cicles);die;

    }

    public function cicle(Request $request)
    {
        $id = $request->get("id");

        $cicles = $this->getDoctrine()
            ->getRepository(Cicle::class)
            ->findOneBy(['id' => $id]);



        dump($cicles);die;

    }
}
