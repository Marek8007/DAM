import { useState } from "react";

const useNotes = () => {

  const [notes, setNotes] = useState([""]); //array de notas
  const [currentNote, setCurrentNote] = useState(0); // índice

  const returnNote = notes[currentNote] ?? ""; //devuelve la nota y si está vacía devuelve un string vacío

  const saveNote = (text: string) => { //guardar text en la nota
    if (!text.trim()) return; //si está vacío nada

    notes[currentNote] = text
    // const newNotes = [...notes];
    // newNotes[currentNote] = text;
    // setNotes(newNotes);
  };


  const addNote = () => { //crea una nueva nota
    notes.push("")
    setCurrentNote(notes.length - 1); // nos movemos a la nueva
  };

  const nextNote = () => { // cambiar de nota
    if (currentNote < notes.length - 1) setCurrentNote(currentNote + 1);
  };

  const prevNote = () => { // cambiar de nota
    if (currentNote > 0) setCurrentNote(currentNote - 1);
  };


  const deleteNote = () => { //borra nota
    if (notes.length === 0) return;
    const newNotes = notes.filter((_, i) => i !== currentNote); //aplica un filtro para crear un nuevo array sin la nota actuakl
    setNotes(newNotes);

    if (currentNote >= newNotes.length) setCurrentNote(newNotes.length - 1);
  };

  return {
    notes,
    currentNote,
    returnNote,
    saveNote,
    addNote,
    deleteNote,
    nextNote,
    prevNote
  };
};

export default useNotes;
