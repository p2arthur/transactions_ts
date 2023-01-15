export class NegotiationsView {
  //Method to return a string containing the html that we will need to render the list of negotiations
  template(): string {
    return `
    <table class="table table-hover table-bordered">
    <thead>
        <tr>
         <th>DATE</th>
         <th>QUANTITY</th>
         <th>VALUE</th>
        </tr>
    </thead>
    <tbody>
    
    </tbody>
    
    </table>
    `;
  }
}
