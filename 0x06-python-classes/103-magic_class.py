#!/usr/bin/python3
"""Python class MagicClass that does exactly the same as the Python bytecode"""
import math


class MagicClass:
    def __init__(self, radius):
        self.__radius = 0
        if type(radius) is not int and type(radius) is not float:
            raise TypeError('radius must be a number')
        self.__radius = radius

    def area(self):
        return 2 ** self.__radius * math.pi

    def circumference(self):
        return 2 * math.pi * self.__radius
