1. What problem does the context API help solve?
>It provides a wrapper for local state that can be passed around a direct hierarchy of parent to children or even grand children, without the need for excessive props drilling, an unfortunate side effect however is it makes reusability of components harder

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
>The store is a collection of laws and objects, the actions are the judge and jury, whereas the reducer is like the executioner
The actions receive information when triggered, and that is passed into the reducer which then executes an final consideration to determine whether or not to update/execute a state change based on the jury/judge/actions type and the payload, this depends on logic as understood by the action. The store is known as a single source of truth, as it is maintained over state changes, as it depends on the idea of immutability. initialState and currentState are not the same objects in other words, rather the state is changed by redux over time to reflect changes kind of like snapshots.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
>Application state is application wide and typically available to any component in the hierarchy, where as component state is local, and only available to that component and direct descendants. The former is good for things like storing API calls, where as the latter would be more appropriate for storing the state of whether not a toggleable drawer is open or closed.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
>Redux-thunk is a Redux middleware, that allows it to be asynchronous, as Redux by creation is synchronous in nature. Action creators are interpreted and processed based on a pending outcome.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
> I really liked context, and I'm learning to like Redux too, but I have a bit of an issue with middleware currently and wrapping my head around it. I however have been experimenting with RxJS and really like the idea of observables. I don't know a lot about state management really, but to be truthful, I can appreciate its nature and intended use.
