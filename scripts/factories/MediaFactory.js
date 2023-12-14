// eslint-disable-next-line no-unused-vars
class MediaFactory {
  createMedia(
    photographerDataMediaById,
    photographerDataById,
    titleTranslations
  ) {
    //? Vérifier si le media est une image
    // eslint-disable-next-line no-prototype-builtins
    if (photographerDataMediaById.hasOwnProperty("image")) {
      return new ImageMedia(
        photographerDataMediaById,
        photographerDataById,
        titleTranslations
      );
      //? Si ce n'est pas une image, vérifier si c'est une vidéo
      // eslint-disable-next-line no-prototype-builtins
    } else if (photographerDataMediaById.hasOwnProperty("video")) {
      return new VideoMedia(
        photographerDataMediaById,
        photographerDataById,
        titleTranslations
      );
    } else {
      //? Si le type de média est inconnu, lever une erreur
      throw new Error("Unknown media type");
    }
  }
}

class ImageMedia {
  constructor(
    photographerDataMediaById,
    photographerDataById,
    titleTranslations
  ) {
    //? Définir les propriétés d'une image
    this.type = "image";
    this.src = `../assets/medias_photographers/${photographerDataById.name}/${photographerDataMediaById.image}`;
    this.alt = photographerDataMediaById.title;
    this.translatedTitle = titleTranslations[this.alt];
    this.title = this.translatedTitle;
  }
}

class VideoMedia {
  constructor(
    photographerDataMediaById,
    photographerDataById,
    titleTranslations
  ) {
    //? Définir les propriétés d'une vidéo
    this.type = "video";
    this.src = `../assets/medias_photographers/${photographerDataById.name}/${photographerDataMediaById.video}`;
    this.alt = photographerDataMediaById.title;
    this.translatedTitle = titleTranslations[this.alt];
    this.title = this.translatedTitle;
  }
}
