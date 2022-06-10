# About Quickfacts

The quickfacts component is designed to communicate a quick listing of facts to the audience, usually in the form of recognition, accolades or a statistic about the corresponding subject on the page. 

An example of this section level component in action, please see the [Department Home Page](https://utsa-asc.github.io/college-dls/components/detail/department-home-page.html)

# Guidance

## When to use the quickfacts component

On a marketing landing or home page for a major unit, consider this component to convey top level "fast facts" about the content you are communicating to the user.  

For example, on a college home page, point of pride or stats about the college can go here like the number of degrees offered, the amount of grant funding awarded, the number of faculty or research offered to undergrads, etc.

## When to consider something else

If your content point has corresponding relevant media that you would like to highlight or content that will ultimately link to another resource, consider another component like our content card groups which feature media as well as call to action buttons for users to dig further into your site.

Due to the quickfacts not containing any links or calls to action, it is recommended to only have one quickfacts section on a page.  While there is no limitation on what types of page a quickfacts section can be added to, we would also recommend not making this a standard on all pages.
# Accessibility Notes

This component does not offer any interactivity, and is not designed to be animated.  Each quick fact is structured in it's own div with a corresponding heading tag (h2) for the stat and paragraph for the text.  No aria labels or tags should be needed.
# Using the quickfacts component

This component is supported in our Cascade templates via the **Asset Factory: Blocks > Quickfacts** and can be assigned in a page template at the row level.
# Component Variants

The Quickfacts component supports 1-6 facts, however, please note, utilizing our 12-column grid system, it's difficult to accurately support more than 5.  The main headline for each fact is more limited in width in relation to the number of facts the components needs to display.  Even on large desktop screens, because of these limitations, we strongly urge not to use more than 4 facts in a component.  This component is not designed to be more than one row.

Quickfacts has a full set of color variations:

- Default: white background with orange stat and blue text
- Grey (Alt): grey background with orange stat and blue text
- Orange: orange background with white stat and blue text
- Blue: blue background with orange stat and white text

## Media Requirements

- None
- A background up chevron is automatically added to this component for you, there are no media elements involved with this component

## Copy Requirements

Each fact is composed of the following elements:

- Headline: a 3-6 character number or stat, i.e.- %110, $1.2M, 130+
- Text: a 6-10 word explanation of the headline stat, text will wrap to fit within it's respective column spacing, the more facts you have, the less column space each stat will have to work with (i.e.- more wrapping)
    - Keep the length of this text consistent across all your facts to avoid an unbalanced look

### Original Source and Implementation Notes

Original source from [https://utsa-asc.github.io/college-dls/college-dls/reference/functional.html#quick-facts-component](https://utsa-asc.github.io/college-dls/college-dls/reference/functional.html#quick-facts-component)