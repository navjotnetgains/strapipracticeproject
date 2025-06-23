import type { Schema, Struct } from '@strapi/strapi';

export interface HomeBestsellers extends Struct.ComponentSchema {
  collectionName: 'components_home_bestsellers';
  info: {
    displayName: 'bestsellers';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeCollection extends Struct.ComponentSchema {
  collectionName: 'components_home_collections';
  info: {
    displayName: 'collection';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeFeatured extends Struct.ComponentSchema {
  collectionName: 'components_home_featureds';
  info: {
    displayName: 'featured';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeHerosecton extends Struct.ComponentSchema {
  collectionName: 'components_home_herosectons';
  info: {
    displayName: 'herosection';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeOriginal extends Struct.ComponentSchema {
  collectionName: 'components_home_originals';
  info: {
    displayName: 'original';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeServicesbar extends Struct.ComponentSchema {
  collectionName: 'components_home_servicesbars';
  info: {
    displayName: 'servicesbar';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.bestsellers': HomeBestsellers;
      'home.collection': HomeCollection;
      'home.featured': HomeFeatured;
      'home.herosecton': HomeHerosecton;
      'home.original': HomeOriginal;
      'home.servicesbar': HomeServicesbar;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
