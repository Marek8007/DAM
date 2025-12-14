<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Characters
 *
 * @ORM\Table(name="characters", indexes={@ORM\Index(name="planet_id", columns={"planet_id"})})
 * @ORM\Entity
 */
class Characters
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
     * @ORM\Column(name="name", type="text", length=65535, nullable=true)
     */
    private $name;

    /**
     * @var int|null
     *
     * @ORM\Column(name="height", type="integer", nullable=true)
     */
    private $height;

    /**
     * @var float|null
     *
     * @ORM\Column(name="mass", type="float", precision=10, scale=0, nullable=true)
     */
    private $mass;

    /**
     * @var string|null
     *
     * @ORM\Column(name="hair_color", type="text", length=65535, nullable=true)
     */
    private $hairColor;

    /**
     * @var string|null
     *
     * @ORM\Column(name="skin_color", type="text", length=65535, nullable=true)
     */
    private $skinColor;

    /**
     * @var string|null
     *
     * @ORM\Column(name="eye_color", type="text", length=65535, nullable=true)
     */
    private $eyeColor;

    /**
     * @var string|null
     *
     * @ORM\Column(name="birth_year", type="text", length=65535, nullable=true)
     */
    private $birthYear;

    /**
     * @var string|null
     *
     * @ORM\Column(name="gender", type="text", length=65535, nullable=true)
     */
    private $gender;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="created_date", type="datetime", nullable=true, options={"default"="CURRENT_TIMESTAMP"})
     */
    private $createdDate = 'CURRENT_TIMESTAMP';

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="updated_date", type="datetime", nullable=true, options={"default"="CURRENT_TIMESTAMP"})
     */
    private $updatedDate = 'CURRENT_TIMESTAMP';

    /**
     * @var string|null
     *
     * @ORM\Column(name="url", type="text", length=65535, nullable=true)
     */
    private $url;

    /**
     * @var Planets
     *
     * @ORM\ManyToOne(targetEntity="Planets")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="planet_id", referencedColumnName="id")
     * })
     */
    private $planet;

    /**
     * @var Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Affiliations", inversedBy="idCharacter")
     * @ORM\JoinTable(name="character_affiliations",
     *   joinColumns={
     *     @ORM\JoinColumn(name="id_character", referencedColumnName="id")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="id_affiliation", referencedColumnName="id")
     *   }
     * )
     */
    private $idAffiliation = array();

    /**
     * @var Doctrine\Common123\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Films", inversedBy="idCharacter")
     * @ORM\JoinTable(name="character_films",
     *   joinColumns={
     *     @ORM\JoinColumn(name="id_character", referencedColumnName="id")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="id_film", referencedColumnName="id")
     *   }
     * )
     */
    private $idFilm = array();

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->idAffiliation = new \Doctrine\Common\Collections\ArrayCollection();
        $this->idFilm = new \Doctrine\Common\Collections\ArrayCollection();
    }



    public function setId(int $id): void
    {
        $this->id = $id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): void
    {
        $this->name = $name;
    }

    public function getHeight(): ?int
    {
        return $this->height;
    }

    public function setHeight(?int $height): void
    {
        $this->height = $height;
    }

    public function getMass(): ?float
    {
        return $this->mass;
    }

    public function setMass(?float $mass): void
    {
        $this->mass = $mass;
    }

    public function getHairColor(): ?string
    {
        return $this->hairColor;
    }

    public function setHairColor(?string $hairColor): void
    {
        $this->hairColor = $hairColor;
    }

    public function getSkinColor(): ?string
    {
        return $this->skinColor;
    }

    public function setSkinColor(?string $skinColor): void
    {
        $this->skinColor = $skinColor;
    }

    public function getEyeColor(): ?string
    {
        return $this->eyeColor;
    }

    public function setEyeColor(?string $eyeColor): void
    {
        $this->eyeColor = $eyeColor;
    }

    public function getBirthYear(): ?string
    {
        return $this->birthYear;
    }

    public function setBirthYear(?string $birthYear): void
    {
        $this->birthYear = $birthYear;
    }

    public function getGender(): ?string
    {
        return $this->gender;
    }

    public function setGender(?string $gender): void
    {
        $this->gender = $gender;
    }

    /**
     * @return \DateTime|string|null
     */
    public function getCreatedDate()
    {
        return $this->createdDate;
    }

    /**
     * @param \DateTime|string|null $createdDate
     */
    public function setCreatedDate($createdDate): void
    {
        $this->createdDate = $createdDate;
    }

    /**
     * @return \DateTime|string|null
     */
    public function getUpdatedDate()
    {
        return $this->updatedDate;
    }

    /**
     * @param \DateTime|string|null $updatedDate
     */
    public function setUpdatedDate($updatedDate): void
    {
        $this->updatedDate = $updatedDate;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(?string $url): void
    {
        $this->url = $url;
    }

    public function getPlanet(): Planets
    {
        return $this->planet;
    }

    public function setPlanet(Planets $planet): void
    {
        $this->planet = $planet;
    }

    /**
     * @return \Doctrine\Common\Collections\ArrayCollection|\Doctrine\Common\Collections\Collection
     */
    public function getIdAffiliation()
    {
        return $this->idAffiliation;
    }

    /**
     * @param \Doctrine\Common\Collections\ArrayCollection|\Doctrine\Common\Collections\Collection $idAffiliation
     */
    public function setIdAffiliation($idAffiliation): void
    {
        $this->idAffiliation = $idAffiliation;
    }

    /**
     * @return \Doctrine\Common\Collections\ArrayCollection|\Doctrine\Common\Collections\Collection
     */
    public function getIdFilm()
    {
        return $this->idFilm;
    }

    /**
     * @param \Doctrine\Common\Collections\ArrayCollection|\Doctrine\Common\Collections\Collection $idFilm
     */
    public function setIdFilm($idFilm): void
    {
        $this->idFilm = $idFilm;
    }

    /**
     * @param \Doctrine\Common\Collections\ArrayCollection|\Doctrine\Common\Collections\Collection $idFilm
     */



}
