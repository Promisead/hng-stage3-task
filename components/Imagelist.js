// src/components/Gallery.js
import React from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Image } from "./image";

const ImageDraggable = ({ image, index, moveImage }) => {
  const [, ref] = useDrag({
    type: "IMAGE",
    item: { index },
  });

  const [, drop] = useDrop({
    accept: "IMAGE",
    hover: (draggedImage) => {
      if (draggedImage.index !== index) {
        moveImage(draggedImage.index, index);
        draggedImage.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))}>
      <Image imageUrl={image} />
    </div>
  );
};

const Gallery = ({ images }) => {
  const moveImage = (fromIndex, toIndex) => {
    // Move the image in the array
    // Update your state accordingly
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <ImageDraggable
          key={index}
          image={image}
          index={index}
          moveImage={moveImage}
        />
      ))}
    </div>
  );
};

export default Gallery;
