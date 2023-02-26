<script setup>
import { message } from 'ant-design-vue'
import { day1 } from './composables/day1'
import useStore from '~~/stores'
import {
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  QuestionCircleOutlined,
} from '@ant-design/icons-vue'

const exam = ref({})
const visible = ref(false)
const drawerVisible = ref(false)
const { auth } = useStore()

const handleChooseItem = item => {
  exam.value = item
  visible.value = true
}

const checkRules = {
  answer: [
    {
      required: true,
      type: 'array',
      trigger: 'blur',
      message: '答案不可为空！',
    },
  ],
}

const radioRules = {
  answer: [
    {
      required: true,
      trigger: 'blur',
      message: '答案不可为空！',
    },
  ],
}

const handleCancel = () => {
  visible.value = false
  exam.value.answer = []
}

const disableItem = computed(() => {
  if (exam.value.key) {
    const flag =
      auth.exam.successKey.includes(exam.value.key) || auth.exam.errorKey.includes(exam.value.key)
    if (flag) {
      exam.value.answer = auth.exam.answerObj[exam.value.key]
    }
    return flag
  } else return false
})

const recordSuccess = () => {
  message.success(`恭喜张同学答对 JS训练${exam.value.name},稍候将为您记录本次答题情况`)
  if (!auth.exam.successKey.includes(exam.value.key)) {
    auth.exam.successKey.push(exam.value.key)
    auth.exam.answerObj[exam.value.key] = exam.value.answer
  }
}

const recordError = () => {
  message.warning(
    `哦豁，答错了。请张同学查看解析 JS训练${exam.value.name},稍候将为您记录本次答题情况`,
  )
  if (!auth.exam.errorKey.includes(exam.value.key)) {
    auth.exam.errorKey.push(exam.value.key)
    auth.exam.answerObj[exam.value.key] = exam.value.answer
  }
}

const handleOk = () => {
  try {
    if (Array.isArray(exam.value.answer)) {
      if (exam.value.answer.length !== exam.value.right.length) throw new Error()
      let checkAnswer = true
      exam.value.answer.forEach(item => {
        if (!exam.value.right.includes(item)) checkAnswer = false
      })
      if (checkAnswer) recordSuccess()
      else throw new Error()
    } else {
      if (exam.value.answer === exam.value.right) recordSuccess()
      else throw new Error()
    }
  } catch (e) {
    recordError()
  }
}

const openDrawer = () => (drawerVisible.value = true)
</script>

<template>
  <a-card title="JS练习">
    <a-card-grid v-for="item in day1" class="examItem" @click="handleChooseItem(item)">
      <span class="examTitle">
        <CheckCircleTwoTone
          two-tone-color="#08BF42"
          v-if="auth.exam.successKey.includes(item.key)"
          style="font-size: 14px"
        />
        <CloseCircleTwoTone
          two-tone-color="#BF0808"
          v-else-if="auth.exam.errorKey.includes(item.key)"
          style="font-size: 14px"
        />
        <QuestionCircleOutlined v-else style="font-size: 14px" />
        {{ item.name }}
      </span>
    </a-card-grid>
  </a-card>

  <a-modal
    v-model:visible="visible"
    :title="'JS练习' + exam.name"
    :destroyOnClose="true"
    :maskClosable="false"
    :bodyStyle="{
      'padding-bottom': '0px',
    }"
    :footer="null"
    @cancel="handleCancel"
  >
    <a-form
      :rules="exam.type == 'check' ? checkRules : radioRules"
      layout="vertical"
      :model="exam"
      @finish="handleOk"
    >
      <a-form-item :label="exam.question" v-if="exam.type == 'check'" name="answer">
        <a-checkbox-group :disabled="disableItem" v-model:value="exam.answer">
          <a-row>
            <a-col flex="100%" v-for="(item, index) in exam.options">
              <a-checkbox :value="index">
                {{ item }}
              </a-checkbox>
            </a-col>
          </a-row>
        </a-checkbox-group>
      </a-form-item>

      <a-form-item :label="exam.question" v-if="exam.type == 'radio'" name="answer">
        <a-radio-group :disabled="disableItem" v-model:value="exam.answer">
          <a-row>
            <a-col flex="100%" v-for="(item, index) in exam.options">
              <a-radio :value="index">
                {{ item }}
              </a-radio>
            </a-col>
          </a-row>
        </a-radio-group>
      </a-form-item>

      <a-button type="link" v-if="disableItem" @click="openDrawer">查看解析</a-button>

      <a-form-item style="text-align: right; border-top: 1px solid #edeff2">
        <a-button :disabled="disableItem" style="margin: 20px 0" type="primary" html-type="submit">
          提交
        </a-button>
      </a-form-item>
    </a-form>
  </a-modal>
  <a-drawer
    v-model:visible="drawerVisible"
    :title="exam.name + '解析'"
    placement="right"
    :zIndex="99999"
  >
    <p v-for="(item, index) in exam.desc">
      {{ `${index + 1}. ${item}` }}
    </p>
  </a-drawer>
</template>

<style lang="less" scoped>
.examItem {
  margin-left: 10px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  text-align: center;
  .examTitle {
    line-height: 50px;
  }
}
</style>
