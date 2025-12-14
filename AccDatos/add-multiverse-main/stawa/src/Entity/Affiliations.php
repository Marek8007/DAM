<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Affiliations
 *
 * @ORM\Table(name="affiliations")
 * @ORM\Entity
 */
class Affiliations
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
     * @ORM\Column(name="affiliation", type="string", length=255, nullable=true)
     */
    private $affiliation;

    /**
     * @var Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Characters", mappedBy="idAffiliation")
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

    public function getAffiliation(): ?string
    {
        return $this->affiliation;
    }

    public function setAffiliation(?string $affiliation): void
    {
        $this->affiliation = $affiliation;
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
