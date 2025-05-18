# Schema Implementation Guide

This guide explains how to implement the structured data schemas on specific pages of the website.

## How to Add Schema to Page Components

To add structured data to specific pages, follow these steps:

1. Import the schema JSON file in your page component:

```jsx
import { Helmet } from "react-helmet";
import ndisServicesSchema from "/seo/ndis-services-schema.json";

const NDISPage = () => {
  return (
    <>
      <Helmet>
        <title>NDIS Services | Vitality Community Care</title>
        <meta name="description" content="..." />
        {/* Add the schema data */}
        <script type="application/ld+json">
          {JSON.stringify(ndisServicesSchema)}
        </script>
      </Helmet>
      {/* Rest of your component */}
    </>
  );
};
```

## Available Schema Files

The following schema files are available:

1. **structured-data.json** - Main organization data (already added to index.html)
2. **ndis-services-schema.json** - Add to the NDIS Services page
3. **accommodation-schema.json** - Add to the Accommodation listings page
4. **faq-schema.json** - Add to pages with FAQ sections
5. **breadcrumbs-schema.json** - Template for breadcrumb navigation (customize per page)

## Customizing Breadcrumbs

For each page, customize the breadcrumbs schema to reflect the actual navigation path:

```jsx
// Example for the Accommodation Detail page
import { Helmet } from "react-helmet";
import breadcrumbsTemplate from "/seo/breadcrumbs-schema.json";

const AccommodationDetail = ({ property }) => {
  // Clone the template and customize it
  const breadcrumbsSchema = JSON.parse(JSON.stringify(breadcrumbsTemplate));
  
  // Update the breadcrumb items
  breadcrumbsSchema.itemListElement = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://vitalitycommunitycare.com.au/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Accommodation",
      "item": "https://vitalitycommunitycare.com.au/accommodation"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": property.name,
      "item": `https://vitalitycommunitycare.com.au/accommodation/${property.id}`
    }
  ];

  return (
    <>
      <Helmet>
        <title>{property.name} | Vitality Community Care</title>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbsSchema)}
        </script>
      </Helmet>
      {/* Rest of component */}
    </>
  );
};
```

## Testing Schema Markup

After implementing schema markup:

1. Use [Google's Rich Results Test](https://search.google.com/test/rich-results) to validate your schema
2. Use [Schema.org Validator](https://validator.schema.org/) for detailed validation
3. Test across all key pages

## Benefits of Schema Markup

- Enhanced search result appearance with rich snippets
- Better understanding of your content by search engines
- Improved click-through rates
- Potential ranking benefits for relevant searches 