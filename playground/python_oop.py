#
class Animal:
    name = "Animal"

    def eat(self):
        print("Eating")


class Dog(Animal):
    def __init__(self) -> None:
        super().__init__()
        self.name = "Dog"


print(
    Dog().name
)

a = []
a = ()
a = {}
