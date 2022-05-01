## Prompt

We have supplied you with a `review_list`, which is a collection of book recommendations from famous authors. Assume that this list could grow arbitrarily large in size.

Your task is to write a program that returns *all* books that have been recommended `n` times. Decide which data is important to return.

You will be asked to implement your solution in either javascript or go (depending on which position you are interviewing for). Feel free to use whatever editor or tools that you are comfortable with.

Please ask us questions, use Google, or consult documentation if you get stuck. There are many possible solutions here, so we are more interested in the process.

You may practice this exercise in advance if you so choose, but you will be asked to implement from scratch as part of the assessment.

## Things to Note:
- There may be multiple books recommended `n` times. They all must be returned.
- There may be duplicate book titles, but every Title:Author combination is unique.
- Some entries do not have data for every field.

## Desired Behavior:
```bash
$ ./book-parser 5
# [ <all books that have been recommended exactly 5 times> ]
```

## Time

30 minutes
