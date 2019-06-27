import java.util.*;
import java.io.*;
import java.lang.*;
//o(log n) or o(n)
class Node{
	Node left;
	Node right;
	int data;

	Node(int data){
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class SearchBST{

    public static boolean search(Node root,int key){
        if(root == null){
            return false;
        }
        if(root.data == key){
            return true;
        }else if(root.data > key){
            return search(root.left,key);
        }else{
            return search(root.right,key);
        }
    }

	public static Node insert(Node root,int data){
		if(root == null) {
            return new Node(data);
        } else {
            Node cur;
            if(data <= root.data) {
                cur = insert(root.left, data);
                root.left = cur;
            } else {
                cur = insert(root.right, data);
                root.right = cur;
            }
            return root;
        }
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
        System.out.print("Enter number of element in BST: ");
        int t = scan.nextInt();
        System.out.print("Enter the elements of BST: ");
        Node root = null;
        while(t-- > 0) {
            int data = scan.nextInt();
            root = insert(root, data);
        }
        System.out.print("\nplease enter a key: ");
        int key = scan.nextInt();
        if(search(root,key) == true){
            System.out.print("\nhurry, It is in the tree. ");
        }else{
            System.out.print("\nsorry it is not in the tree;");
        }
        scan.close();
	}
}