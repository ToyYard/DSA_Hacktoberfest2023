<script>
// Javascript implementation of recursive 
// selection sort for singly linked list 
// | Swapping node links	 

// A Linked list node
class Node 
{
	constructor(val) 
	{
		this.data = val;
		this.next = null;
	}
}

// Function to swap nodes 'currX' and 
// 'currY' in a linked list without 
// swapping data
function swapNodes(head_ref, currX, 
				currY, prevY) 
{
	// Make 'currY' as new head
	head_ref = currY;

	// Adjust links
	prevY.next = currX;

	// Swap next pointers
	var temp = currY.next;
	currY.next = currX.next;
	currX.next = temp;
	return head_ref;
}

// Function to sort the linked list using
// recursive selection sort technique
function recurSelectionSort(head) 
{
	// If there is only a single node
	if (head.next == null)
		return head;

	// 'min' - pointer to store the node 
	// having minimum data value
	var min = head;

	// 'beforeMin' - pointer to store node 
	// previous to 'min' node
	var beforeMin = null;
	var ptr;

	// Traverse the list till the last node
	for (ptr = head; ptr.next != null; 
		ptr = ptr.next) 
	{
		// if true, then update 'min' and 
		// 'beforeMin'
		if (ptr.next.data < min.data) 
		{
			min = ptr.next;
			beforeMin = ptr;
		}
	}

	// if 'min' and 'head' are not same,
	// swap the head node with the 'min' node
	if (min != head)
		head = swapNodes(head, head, 
						min, beforeMin);

	// recursively sort the remaining list
	head.next = recurSelectionSort(head.next);

	return head;
}

// Function to sort the given linked list
function sort(head_ref) 
{
	// If list is empty
	if ((head_ref) == null)
		return null;

	// Sort the list using recursive 
	// selection sort technique
	head_ref = recurSelectionSort(head_ref);
	return head_ref;
}

// Function to insert a node at the
// beginning of the linked list
function push(head_ref, new_data) 
{
	// Allocate node
	var new_node = new Node();

	// Put in the data
	new_node.data = new_data;

	// Link the old list to the 
	// new node
	new_node.next = (head_ref);

	// Move the head to point to the 
	// new node
	(head_ref) = new_node;
	return head_ref;
}

// Function to print the linked list
function printList(head) 
{
	while (head != null) 
	{
		document.write(head.data + " ");
		head = head.next;
	}
}

// Driver code
var head = null;

// Create linked list 10.12.8.4.6
head = push(head, 6);
head = push(head, 4);
head = push(head, 8);
head = push(head, 12);
head = push(head, 10);

document.write(
"Linked list before sorting:<br/>");
printList(head);

// Sort the linked list
head = sort(head);

document.write(
"<br/>Linked list after sorting:<br/>");
printList(head);
// This code is contributed by todaysgaurav 
</script>
