export const submissionList = async () => {
    // Get the submissions from your API
    const response = await fetch("http://localhost:8088/submissions")
    const submissions = await response.json()

    // Iterate the submissions and create some <section> representations
    let submissionHTML = "<article>"
    
    for (const entry of submissions) {
        submissionHTML += `
        <article class="submission">
        <section>Owns Jeans? ${entry.ownsBlueJeans}</section>
        <section>Area Type Foreign Key? ${entry.socioLocationId}</section>
        </article>
        `
    }

    submissionHTML += `</article>`

    // Return the HTML string
    return submissionHTML;
}