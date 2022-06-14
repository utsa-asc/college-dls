# About Profile Card
This is a smaller level component and is not designed to be used stand alone. 

An example of this component in action, please see the corresponding [Faculty Group](faculty-group) component.
# Guidance
## When to use the Profile Card component
This component should only be used in [Faculty Group](faculty-group), on a marketing landing or home page for displaying a quick list of faculty.  

## When to consider something else
If you need to display more information about a faculty member on a page, please consider the [Profile Info](profile-info) or [Faculty Bio](faculty-bio) components.

# Accessibility Notes
The name of the person in the profile card is meant to be linked to a more detail page, for faculty, this would be their respective faculty profile page.  This feature is optional, and without it, there should be no other interaction within this component except for any anchor tags contained within the card content box (email, phone, anchor tags in the short content field).

# Using the quickfacts component
This component is supported in our Cascade templates via the **Asset Factory: Blocks > Faculty** and is used via the faculty listing page template.  
## Component Variants
This component currently only supports two variants:
- Default: white background with orange text name, and regular text
- Blue (Alt): blue background with white name and white regular text

## Media Requirements
- Profile Card Image:  The headshot image of the person in the profile card.  Our standard headshot image size is 450px (width) by 600px (height), 72 ppi (pixels per inch) jpeg or png.
    - Image should be no larger and 300kb (kilobytes)

## Copy Requirements
A profile card consists of the following elements:
- Headshot: the image to be displayed in the card (headshot of the person)
- Display Name: the name of the person
- Details
    - Title: a text field for displaying the person's primary title (Required)
    - Secondary Title: a text field for displaying alternative or additional title information (Optional)
    - Profile Link: a URL for hyperlinking the Display Name (Optional)
    - Content: a WYSIWYG box for the rest of the content on the card, please keep in mind this component will be displayed next to other cards so it is important to keep the details content consistent in formatting and length with all the other cards being displayed.  Again, please see [Faculty Group](faculty-group) for an example.

### Original Source and Implementation Notes
Original source from [https://utsa-asc.github.io/college-dls/college-dls/reference/card-tiles.html#profile-card](https://utsa-asc.github.io/college-dls/college-dls/reference/card-tiles.html#profile-card)


### TODO: Fractal Dev work, create a separate preview template for this component to pop into a col-3 or col-4 width size.