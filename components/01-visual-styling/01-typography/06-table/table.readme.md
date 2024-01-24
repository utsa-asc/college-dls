# About Tables
Tables were once used for layout on the web, but as the web progressed, they are now only used for tabular data. 
## Guidance

### When to use the tables
Some things that could be displayed in tables are tuition and fees or other items that will help the user view data quickly. 

### When to consider something else
Please consider another component if you are using a table for layout and not for tabular data.
## Accessibility Notes
Please consider adding table headers (`th`) with either a `scope="col"` or `scope="row"` to help with anyone who might be using a screen reader. 
## Using Tables
Tables are available via the WYSIWYG, and an editor can change the style to **Table Striped** by going to **Formats: Custom > Table Striped**. For example, an editor could add headers by changing the **Row Properties** > **Row Type** to **Header**, and the **Cell Properties** > **Cell Type** to **Header Cell**. 
## Component Variants
We currently have four variants:
- Default, which is what anyone will see when they add a table to a website
    - All table headers (`th`) will be bold and orange text
- Striped, which adds zebra striping to a table via the `table-design` class
    - A `background-color` of orange will be added to the table head (`thead`)
        - Two variants of Striped have classes `table-design-blue` and `table-design-grey` to change the table head (`thead`) background

### Media Requirements
- A wrapper class of `medium-headline-table` helps with any tables larger than 100% of the viewport for mobile responsiveness.
- No images or videos should be added inside a table 

### Copy Requirements
Tables should only be used for tabular data and not for layout. 

### Original Source and Implementation Notes
Original source from: [https://utsa-asc.github.io/college-dls/college-dls/reference/navigation-standard.html#table-component](https://utsa-asc.github.io/college-dls/college-dls/reference/navigation-standard.html#table-component)