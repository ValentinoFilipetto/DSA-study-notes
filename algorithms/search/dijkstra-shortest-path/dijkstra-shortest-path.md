## Dijkstra's shortest path

We have seen that the running time of depth-first search for a graph is `O(V+E)`, which is because we need to visit every node and go through each edge once. Is it possible to write an algorithm that only goes through the shortest path instead of visiting every node? This is what Dijkstra's algorithm tries to accomplish.

By _shortest path_ here we mean the _least expensive_ in terms of weigth, not the one containining the smallest number of edges. Dijkstra's algorithm progressively determines the distances of all the nodes from the starting point by keeping a list of distances, inspecting the nodes and updating the list with whenever a shortest path is found. It is then easy to retrieve the shortest path, because we can keep track of every time the cost decreased.

[Here](https://www.youtube.com/watch?v=wtdtkJgcYUM&ab_channel=TutorialHorizon) is a video that illustrates the algorithm running.
