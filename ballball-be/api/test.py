from .test_1 import test_2


def test_api():
    list_num = test_2()
    new_list = [n for n in list_num if n % 2 == 0]

    return new_list
