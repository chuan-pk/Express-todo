from selenium import webdriver
import time
import unittest
from selenium.webdriver.common.keys import Keys


class HomePageTest(unittest.TestCase):

    def setUp(self):
        self.browser = webdriver.Firefox()

    def tearDown(self):
        time.sleep(2)
        self.browser.quit()

    def test_can_get_homepage(self):
        self.browser.get('http://localhost:3000/')
        time.sleep(2)

        # get input
        todo_text = self.browser.find_element_by_id('todo_text')
        date = self.browser.find_element_by_id('date')
        priority = self.browser.find_element_by_id('priority')
        add_btn = self.browser.find_element_by_id('add_todo')

        self.assertEqual(
            todo_text.get_attribute('placeholder'), 'Enter to-do item'
            )

        todo_text.send_keys('implement simple processor from VHDL')
        date.send_keys('2018-04-28')
        priority.send_keys('High')
        add_btn.click()
        time.sleep(2)

        todo_ul = self.browser.find_elements_by_tag_name('ul')[0]
        rows = todo_ul.find_elements_by_tag_name('li')
        rows_texts =  [row.text for row in rows]

        self.assertTrue(
            any(('implement simple processor from VHDL' and '2018-04-28' and 'High') in r for r in rows_texts)    
            )


if __name__ == '__main__':
    unittest.main(warnings='ignore') 