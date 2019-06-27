import java.util.*;
import java.io.*;

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

class PreInPostOrderBST{

	public static void preOrder(Node root){
		if(root != null){
            System.out.print(root.data+ " ");
            if(root.left != null){
                preOrder(root.left);
            }
            if(root.right != null){
                preOrder(root.right);
            }
        }
	}

	public static void postOrder(Node root) {
        if(root != null){
            if(root.left != null){
                postOrder(root.left);
            }
            if(root.right !=null){
            postOrder(root.right);
            }
            System.out.print(root.data+ " ");
        }
    }

    public static void inOrder(Node root) {
        if(root != null){
            if(root.left !=null){
                inOrder(root.left);
            }
            System.out.print(root.data+" ");
            if(root.right != null){
                inOrder(root.right);
            }
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
        int t = scan.nextInt();
        Node root = null;
        while(t-- > 0) {
            int data = scan.nextInt();
            root = insert(root, data);
        }
        scan.close();
        System.out.print("preOrder: ");
        preOrder(root);
        System.out.print("\npostorder: ");
        postOrder(root);
        System.out.print("\ninOrder: ");
        inOrder(root);
	}
}