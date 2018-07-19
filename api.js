export default function getIdeas(callback) {
    var clientContext = new SP.ClientContext("/teams/CI");
    var eventList = clientContext.get_web().get_lists().getByTitle('Ideas');
    var eventCamlQuery = new SP.CamlQuery();
    eventCamlQuery.set_viewXml(
        "<View><Query><Where><Neq><FieldRef Name='Status'/><Value Type='Text'>Closed</Value></Neq></Where></Query></View>"
    );
    var collListItem = eventList.getItems(eventCamlQuery);
    clientContext.load(collListItem);
    clientContext.executeQueryAsync(
        Function.createDelegate(this, onFetchIdeasSucceeded),
        Function.createDelegate(this, onQueryError)
    );
    function onQueryError(sender, args) {
        alert(args.get_message());
    }
    function onFetchIdeasSucceeded(sender, args) {
        let ideaDataSet = [];
        let ideasList = collListItem.getEnumerator();
        if (collListItem.$2_0.$1H_0.length > 0) {
            while (ideasList.moveNext()) {
                var cListItem = ideasList.get_current();
                ideaDataSet.push({
                    "ID" : cListItem.get_item("ID"),
                    "Title": cListItem.get_item("Title"),
                    "Detail": cListItem.get_item("Detail"),
                    "Area": cListItem.get_item("Area"),
                    "Status": cListItem.get_item("Status"),
                    "Created": cListItem.get_item("Created"),
                    "DateDue": cListItem.get_item("DateDue"),
                    "DateCompleted": cListItem.get_item("DateCompleted"),
                });
            }
        }
        // console.log('callback data',ideaDataSet);
        callback(ideaDataSet)
    }
} 
