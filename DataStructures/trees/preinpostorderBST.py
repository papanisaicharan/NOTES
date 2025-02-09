#o(log n) or o(n)
class Node:
	def __init__(self, info):
		self.info = info
		self.left = None
		self.right = None
		self.level = None

	def __str__(self):
		return str(self.info)

class BinarySearchTree:
	def __init__(self):
		self.root = None

	def create(self, val):
		if self.root == None:
			self.root = Node(val)
		else:
			current = self.root
			while True:
				if val < current.info:
					if current.left:
						current = current.left
					else:
						current.left = Node(val)
						break
				elif val > current.info:
					if current.right:
						current = current.right
					else:
						current.right = Node(val)
						break
				else:
					break

def preOrder(root):
	if root:
		print(root.info,end=" ")
		if root.left:
			preOrder(root.left)
		if root.right:
			preOrder(root.right)

def inOrder(root):
	if root:
		if root.left:
			inOrder(root.left)
		print(root.info,end=" ")
		if root.right:
			inOrder(root.right)

def postOrder(root):
	if root:
		if root.left:
			postOrder(root.left)
		if root.right:
			postOrder(root.right)
		print(root.info,end=" ")



tree = BinarySearchTree()
t = int(input())

arr = list(map(int,input().split()))

for i in range(t):
	tree.create(arr[i])

print("preOrder: ",end="")
preOrder(tree.root)
print()
print("inOrder: ",end="")
inOrder(tree.root)
print()
print("postOrder: ",end="")
postOrder(tree.root)
