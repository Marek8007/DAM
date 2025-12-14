<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Films
 *
 * @ORM\Table(name="films")
 * @ORM\Entity
 */
class Films
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string|null
     *
     * @ORM\Column(name="episode", type="string", length=12, nullable=true)
     */
    private $episode;

    /**
     * @var string|null
     *
     * @ORM\Column(name="title", type="string", length=30, nullable=true)
     */
    private $title;

    /**
     * @var Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Characters", mappedBy="idFilm")
     */
    private $idCharacter = array();

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->idCharacter = new \Doctrine\Common\Collections\ArrayCollection();
    }

    public function getId(): int
    {
        return $this->id;
    }


    public function getEpisode(): ?string
    {
        return $this->episode;
    }

    public function setEpisode(?string $episode): void
    {
        $this->episode = $episode;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(?string $title): void
    {
        $this->title = $title;
    }

    /**
     * @return \Doctrine\Common\Collections\ArrayCollection|\Doctrine\Common\Collections\Collection
     */
    public function getIdCharacter()
    {
        return $this->idCharacter;
    }

    /**
     * @param \Doctrine\Common\Collections\ArrayCollection|\Doctrine\Common\Collections\Collection $idCharacter
     */
    public function setIdCharacter($idCharacter): void
    {
        $this->idCharacter = $idCharacter;
    }



}
