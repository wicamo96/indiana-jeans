export const submissionList = async () => {
    // Get the submissions from your API
    const response = await fetch("http://localhost:8088/submissions")
    const submissions = await response.json()

    // Iterate the submissions and create some <section> representations
    let submissionHTML = "<article>"
    
    // Use .map() to copy array and pull info from each object's properties
    const arrayCopy = submissions.map((submission) => {
            return `
            <article class="submission">
            <section>Owns Jeans? ${submission.ownsBlueJeans}</section>
            <section>Area Type Foreign Key? ${submission.socioLocationId}</section>
            </article>
            `;
        }
    )

    // Use .join() to concatenate string
    submissionHTML += arrayCopy.join("");

    // Close article that houses info
    submissionHTML += `</article>`

    // Return the HTML string
    return submissionHTML;
}