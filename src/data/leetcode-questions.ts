import { LeetCodeQuestion } from "@/types/leetcode-question";

export const leetcodeQuestions: LeetCodeQuestion[] = [
  {
    id: "1",
    title: "Two Sum",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    difficulty: "easy",
    tags: ["Array", "Hash Table"]
  },
  {
    id: "2",
    title: "Add Two Numbers",
    description: "You are given two non-empty linked lists representing two non-negative integers. Add the two numbers and return the sum as a linked list.",
    difficulty: "medium",
    tags: ["Linked List", "Math", "Recursion"]
  },
  {
    id: "3",
    title: "Longest Substring Without Repeating Characters",
    description: "Given a string s, find the length of the longest substring without repeating characters.",
    difficulty: "medium",
    tags: ["Hash Table", "String", "Sliding Window"]
  },
  {
    id: "4",
    title: "Median of Two Sorted Arrays",
    description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
    difficulty: "hard",
    tags: ["Array", "Binary Search", "Divide and Conquer"]
  },
  {
    id: "5",
    title: "Longest Palindromic Substring",
    description: "Given a string s, return the longest palindromic substring in s.",
    difficulty: "medium",
    tags: ["String", "Dynamic Programming"]
  },
  {
    id: "6",
    title: "Zigzag Conversion",
    description: "The string 'PAYPALISHIRING' is written in a zigzag pattern on a given number of rows. Write the code that will take a string and make this conversion.",
    difficulty: "medium",
    tags: ["String"]
  },
  {
    id: "7",
    title: "Reverse Integer",
    description: "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range, then return 0.",
    difficulty: "medium",
    tags: ["Math"]
  },
  {
    id: "8",
    title: "String to Integer (atoi)",
    description: "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.",
    difficulty: "medium",
    tags: ["String"]
  },
  {
    id: "9",
    title: "Palindrome Number",
    description: "Given an integer x, return true if x is a palindrome, and false otherwise.",
    difficulty: "easy",
    tags: ["Math"]
  },
  {
    id: "10",
    title: "Regular Expression Matching",
    description: "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*'.",
    difficulty: "hard",
    tags: ["String", "Dynamic Programming", "Recursion"]
  },
  {
    id: "11",
    title: "Container With Most Water",
    description: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water.",
    difficulty: "medium",
    tags: ["Array", "Two Pointers", "Greedy"]
  },
  {
    id: "12",
    title: "Integer to Roman",
    description: "Seven different symbols represent Roman numerals with the following values. Convert an integer to a Roman numeral.",
    difficulty: "medium",
    tags: ["Hash Table", "Math", "String"]
  },
  {
    id: "13",
    title: "Roman to Integer",
    description: "Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M. Convert a roman numeral to an integer.",
    difficulty: "easy",
    tags: ["Hash Table", "Math", "String"]
  },
  {
    id: "14",
    title: "Longest Common Prefix",
    description: "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string ''.",
    difficulty: "easy",
    tags: ["String", "Trie"]
  },
  {
    id: "15",
    title: "3Sum",
    description: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
    difficulty: "medium",
    tags: ["Array", "Two Pointers", "Sorting"]
  },
  {
    id: "16",
    title: "3Sum Closest",
    description: "Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers.",
    difficulty: "medium",
    tags: ["Array", "Two Pointers", "Sorting"]
  },
  {
    id: "17",
    title: "Letter Combinations of a Phone Number",
    description: "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.",
    difficulty: "medium",
    tags: ["Hash Table", "String", "Backtracking"]
  },
  {
    id: "18",
    title: "4Sum",
    description: "Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that the sum equals target.",
    difficulty: "medium",
    tags: ["Array", "Two Pointers", "Sorting"]
  },
  {
    id: "19",
    title: "Remove Nth Node From End of List",
    description: "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
    difficulty: "medium",
    tags: ["Linked List", "Two Pointers"]
  },
  {
    id: "20",
    title: "Valid Parentheses",
    description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    difficulty: "easy",
    tags: ["String", "Stack"]
  }
];
